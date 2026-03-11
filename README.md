[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/npm/v/%40iqbspecs%2Fmetadata-profile)](https://www.npmjs.com/package/@iqbspecs/metadata-profile)

Data interface for defining metadata for objects based on vocabularies of IQB.

* JSON Schema (see `metadata-profile.schema.json`)
* Schema documentation based on [AsyncAPI Generator](https://github.com/asyncapi/generator)
* type definitions for TypeScript (see npm-link above)
* refer to a specific schema version with perma-id: `w3id.org/iqb/spec/metadata-profile/[version]`

Read more:

* [All specifications of IQB](https://iqb-specifications.github.io/) (German only)
* [Learn about TBA](https://iqb-berlin.github.io/tba-info/) (German only)

# Change log

## 0.9

* Zusätzlicher Parameter für Vokabular-Control: `selectionMode` mit den Werten `in-form` (Auswahl wird innerhalb des Metadaten-Formulars als Liste von Radio- bzw. CheckBox-Controls implementiert) oder `dialog` (Auswahl über separate Dialogbox; Default)


## 0.10

* Zusätzlicher Parameter für Profile: `target` mit Array von Werten `UNIT`, `ITEM`, `RESEARCH_STUDY`.
* Alle Enum sind in Großbuchstaben geschrieben.


## 0.11

* AdditioonalProperties ist in schema.json auf false gesetzt.
