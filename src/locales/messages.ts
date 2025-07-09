"use client";

import * as sv from "./sv.json";
import * as en from "./en.json";
import * as ko from "./ko.json";

export type Locales = "sv" | "en" | "ko";

const messages = { sv, en, ko };

export default messages;
