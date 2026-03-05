export interface LanguageCodedText {
  lang: string,
  value: string
}

export interface ProfileEntryParametersVocabulary {
    url: string,
    allowMultipleValues: boolean,
    selectionMode: 'in-form' | 'dialog',
    maxLevel: number,
    hideNumbering: boolean,
    hideDescription: boolean,
    hideTitle: boolean,
    addTextLanguages: string[]
}

export interface ProfileEntryParametersText {
    format: string,
    textLanguages: string[],
    pattern: string
}

export interface ProfileEntryParametersNumber {
    digits: number,
    minValue: number | null,
    maxValue: number | null,
    isPeriodSeconds: boolean
}

export interface ProfileEntryParametersBoolean {
    trueLabel: LanguageCodedText[],
    falseLabel: LanguageCodedText[]
}

export interface MDProfileEntry {
    id: string,
    label: LanguageCodedText[],
    type: string,
    parameters: ProfileEntryParametersNumber | ProfileEntryParametersBoolean |
        ProfileEntryParametersText | ProfileEntryParametersVocabulary | null;
}

export interface MDProfileGroup {
    label: LanguageCodedText[],
    entries: MDProfileEntry[];
}

export interface MDProfile {
    id: string,
    label: LanguageCodedText[],
    type: 'unit' | 'item' | 'research_study' | 'copyright',
    groups: MDProfileGroup[];
}
