"use client";

import * as sv from "@/locales/sv.json";
import * as en from "@/locales/en.json";
import * as ko from "@/locales/ko.json";

export type Locales = "sv" | "en" | "ko";

const messages = { sv, en, ko };

export default messages;
