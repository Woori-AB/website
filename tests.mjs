import { readdirSync, readFileSync } from "node:fs";

const LOCALE_DIR = "locales";
const HTML_FILE = "index.html";

const errors = [];

function flatten(obj, prefix = "") {
    const result = {};

    for (const [key, value] of Object.entries(obj)) {
        const path = prefix ? `${prefix}.${key}` : key;

        if (
            value &&
            typeof value === "object" &&
            !Array.isArray(value)
        ) {
            Object.assign(result, flatten(value, path));
        } else {
            result[path] = value;
        }
    }

    return result;
}

// ---------------------------------------------------------------------
// Load locale files
// ---------------------------------------------------------------------

const localeFiles = readdirSync(LOCALE_DIR)
    .filter(file => file.endsWith(".json"))
    .sort();

if (localeFiles.length < 2) {
    throw new Error("Expected at least two locale JSON files.");
}

const locales = Object.fromEntries(
    localeFiles.map(file => [
        file.replace(/\.json$/, ""),
        JSON.parse(readFileSync(`${LOCALE_DIR}/${file}`, "utf8")),
    ])
);

const flat = Object.fromEntries(
    Object.entries(locales).map(([locale, json]) => [
        locale,
        flatten(json),
    ])
);

const localeNames = Object.keys(flat);

// Use sv.json as the reference if it exists, otherwise the first locale.
const reference = localeNames.includes("sv")
    ? "sv"
    : localeNames[0];

// ---------------------------------------------------------------------
// 1. Verify all locale files contain identical keys
// ---------------------------------------------------------------------

const referenceKeys = new Set(Object.keys(flat[reference]));

for (const locale of localeNames) {
    if (locale === reference) continue;

    const keys = new Set(Object.keys(flat[locale]));

    for (const key of referenceKeys) {
        if (!keys.has(key)) {
            errors.push(`${locale}.json is missing key '${key}'`);
        }
    }

    for (const key of keys) {
        if (!referenceKeys.has(key)) {
            errors.push(`${locale}.json contains extra key '${key}'`);
        }
    }
}

// ---------------------------------------------------------------------
// 2. Verify index.html matches sv.json
// Requires:
//
// <h1 data-i18n="hero.title">Some text</h1>
//
// ---------------------------------------------------------------------

const html = readFileSync(HTML_FILE, "utf8");

const regex =
    /<(?<tag>\w+)[^>]*data-i18n="(?<key>[^"]+)"[^>]*>(?<text>.*?)<\/\1>/gs;

for (const match of html.matchAll(regex)) {
    const { key, text } = match.groups;

    const actual = text
        .replace(/<[^>]+>/g, "")
        .replace(/\s+/g, " ")
        .trim();

    const expected = flat[reference][key];

    if (expected === undefined) {
        errors.push(`index.html references unknown key '${key}'`);
        continue;
    }

    if (actual !== expected) {
        errors.push(
            `index.html: '${key}' differs\n` +
            `  html: "${actual}"\n` +
            `  json: "${expected}"`
        );
    }
}

// ---------------------------------------------------------------------
// 3. Verify selected keys and patterns are identical in every locale
// ---------------------------------------------------------------------

const identicalKeys = [
    "opening-hours.monday.hours",
    "opening-hours.tuesday.hours",
    "opening-hours.wednesday.hours",
    "opening-hours.thursday.hours",
    "opening-hours.friday.hours",
    "opening-hours.saturday.hours",
    "opening-hours.sunday.hours",
];

const identicalKeyPatterns = [
    /\.price$/,
];

function assertIdenticalKey(key) {
    const expected = flat[reference][key];

    if (expected === undefined) {
        errors.push(
            `Identical key '${key}' does not exist in ${reference}.json`
        );
        return;
    }

    for (const locale of localeNames) {
        if (locale === reference) continue;

        if (flat[locale][key] !== expected) {
            errors.push(
                `'${key}' differs between ${reference}.json and ${locale}.json\n` +
                `  ${reference}: "${expected}"\n` +
                `  ${locale}: "${flat[locale][key]}"`
            );
        }
    }
}

// Explicit keys
for (const key of identicalKeys) {
    assertIdenticalKey(key);
}

// Pattern-based keys
const allKeys = Object.keys(flat[reference]);

for (const key of allKeys) {
    if (identicalKeyPatterns.some(pattern => pattern.test(key))) {
        assertIdenticalKey(key);
    }
}

// ---------------------------------------------------------------------
// Result
// ---------------------------------------------------------------------

if (errors.length) {
    console.error("\n❌ Translation validation failed:\n");

    for (const error of errors) {
        console.error(` • ${error}`);
    }

    process.exit(1);
}

console.log(
    `Successfully validated ${localeNames.length} locale(s): ${localeNames.join(", ")}`
);
