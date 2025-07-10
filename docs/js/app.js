
    const schema = {
  "asyncapi": "2.5.0",
  "info": {
    "title": "metadata-profile",
    "description": "Data interface for defining metadata for objects based on vocabularies of IQB.",
    "license": {
      "name": "CC0 1.0",
      "url": "https://creativecommons.org/publicdomain/zero/1.0/"
    },
    "version": " - click on schema id to expand",
    "contact": {
      "name": "Home of iqb-specifications (German only)",
      "url": "https://iqb-specifications.github.io/"
    }
  },
  "channels": {
    "iqb_data_structures": {
      "subscribe": {
        "operationId": "Please select one schema",
        "message": {
          "messageId": "select_schema",
          "x-parser-message-name": "select_schema"
        }
      }
    }
  },
  "components": {
    "schemas": {
      "metadata-values": {
        "$id": "metadata-profile@iqb-standard@0.9",
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "Metadata Profile",
        "description": "Data interface for defining metadata for objects based on vocabularies of IQB.",
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "description": "Identifier for the metadata profile",
            "x-parser-schema-id": "<anonymous-schema-1>"
          },
          "label": {
            "type": "array",
            "description": "Used for storing the input of texts. This type applies also in cases when only one language is used.",
            "items": {
              "type": "object",
              "properties": {
                "lang": {
                  "type": "string",
                  "minLength": 1,
                  "description": "ISO-language code",
                  "pattern": "^[a-z]{2}$",
                  "x-parser-schema-id": "<anonymous-schema-4>"
                },
                "value": {
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-5>"
                }
              },
              "required": [
                "lang",
                "value"
              ],
              "additionalProperties": false,
              "x-parser-schema-id": "<anonymous-schema-3>"
            },
            "minItems": 1,
            "x-parser-schema-id": "<anonymous-schema-2>"
          },
          "groups": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "label": "$ref:$.components.schemas.metadata-values.properties.label",
                "entries": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "string",
                        "pattern": "^[a-zA-Z][0-9a-zA-Z_]*$",
                        "description": "Identifier for the property as part of the metadata profile",
                        "x-parser-schema-id": "<anonymous-schema-10>"
                      },
                      "label": "$ref:$.components.schemas.metadata-values.properties.label",
                      "type": {
                        "type": "string",
                        "enum": [
                          "text",
                          "vocabulary",
                          "boolean",
                          "number"
                        ],
                        "x-parser-schema-id": "<anonymous-schema-11>"
                      },
                      "parameters": {
                        "anyOf": [
                          {
                            "type": "object",
                            "description": "Creates values of type string (one possible id), string[] (multiple ids) or id+text tuples, if text input is allowed.",
                            "properties": {
                              "url": {
                                "type": "string",
                                "description": "URI to the JSON representation (SkoHub) of the vocabulary definition",
                                "x-parser-schema-id": "<anonymous-schema-14>"
                              },
                              "allowMultipleValues": {
                                "type": "boolean",
                                "description": "If true, multiple values are allowed taken from the vocabulary",
                                "default": false,
                                "x-parser-schema-id": "<anonymous-schema-15>"
                              },
                              "selectionMode": {
                                "type": "string",
                                "enum": [
                                  "in-form",
                                  "dialog"
                                ],
                                "description": "UI variants: 'in-form' sets an radio or checkbox list in the form, 'dialog' challenges a modal dialog for selection (default).",
                                "default": "dialog",
                                "x-parser-schema-id": "<anonymous-schema-16>"
                              },
                              "maxLevel": {
                                "type": "integer",
                                "description": "Maximum level taken from the hierarchical vocabulary. This is to hide lower levels. Use '0' for all levels (default).",
                                "default": 0,
                                "x-parser-schema-id": "<anonymous-schema-17>"
                              },
                              "hideNumbering": {
                                "type": "boolean",
                                "description": "If true, the numbering of vocabulary entries is not used/showed in components.",
                                "default": false,
                                "x-parser-schema-id": "<anonymous-schema-18>"
                              },
                              "hideDescription": {
                                "type": "boolean",
                                "description": "If true, the description of vocabulary entries is not used/showed in components.",
                                "default": false,
                                "x-parser-schema-id": "<anonymous-schema-19>"
                              },
                              "hideTitle": {
                                "type": "boolean",
                                "description": "If true, the title of vocabulary entries is not used/showed in components.",
                                "default": false,
                                "x-parser-schema-id": "<anonymous-schema-20>"
                              },
                              "addTextLanguages": {
                                "type": "array",
                                "items": {
                                  "type": "string",
                                  "description": "ISO-language code",
                                  "pattern": "^[a-z]{2}$",
                                  "x-parser-schema-id": "<anonymous-schema-22>"
                                },
                                "description": "If not empty, text can be added to the selected vocabulary entry. The given entries specify the expected language(s).",
                                "default": [],
                                "x-parser-schema-id": "<anonymous-schema-21>"
                              }
                            },
                            "required": [
                              "url"
                            ],
                            "x-parser-schema-id": "<anonymous-schema-13>"
                          },
                          {
                            "type": "object",
                            "description": "Creates values of type string (one possible language) or multi-language texts.",
                            "properties": {
                              "format": {
                                "type": "string",
                                "enum": [
                                  "single",
                                  "multiline",
                                  "html"
                                ],
                                "description": "If true, more then one line of text is prepared for input. Text is wrapped and vertical scrolling is possible.",
                                "default": "single",
                                "x-parser-schema-id": "<anonymous-schema-24>"
                              },
                              "textLanguages": {
                                "type": "array",
                                "items": {
                                  "type": "string",
                                  "description": "ISO-language code",
                                  "pattern": "^[a-z]{2}$",
                                  "x-parser-schema-id": "<anonymous-schema-26>"
                                },
                                "description": "Use this property to add languages, so you provide more then one text input form field.",
                                "default": [
                                  "de"
                                ],
                                "x-parser-schema-id": "<anonymous-schema-25>"
                              },
                              "pattern": {
                                "type": "string",
                                "description": "Use this regular expression to validate the input value.",
                                "x-parser-schema-id": "<anonymous-schema-27>"
                              }
                            },
                            "x-parser-schema-id": "<anonymous-schema-23>"
                          },
                          {
                            "type": "object",
                            "description": "Creates values of type string with number content. The decimal separator is always dot '.'.",
                            "properties": {
                              "digits": {
                                "type": "integer",
                                "description": "Number of digits. Negative values are not valid.",
                                "minimum": 0,
                                "default": 0,
                                "x-parser-schema-id": "<anonymous-schema-29>"
                              },
                              "minValue": {
                                "type": "number",
                                "description": "Minimal value valid for this entry.",
                                "x-parser-schema-id": "<anonymous-schema-30>"
                              },
                              "maxValue": {
                                "type": "number",
                                "description": "Maximal value valid for this entry.",
                                "x-parser-schema-id": "<anonymous-schema-31>"
                              },
                              "isPeriodSeconds": {
                                "type": "boolean",
                                "description": "If true, the (integer) value is interpreted as a number of seconds (duration, time period). This might adapt the form controls.",
                                "default": false,
                                "x-parser-schema-id": "<anonymous-schema-32>"
                              }
                            },
                            "x-parser-schema-id": "<anonymous-schema-28>"
                          },
                          {
                            "type": "object",
                            "description": "Creates values of type string 'true' or 'false'.",
                            "properties": {
                              "trueLabel": "$ref:$.components.schemas.metadata-values.properties.label",
                              "falseLabel": "$ref:$.components.schemas.metadata-values.properties.label"
                            },
                            "x-parser-schema-id": "<anonymous-schema-33>"
                          }
                        ],
                        "x-parser-schema-id": "<anonymous-schema-12>"
                      }
                    },
                    "required": [
                      "id",
                      "type"
                    ],
                    "x-parser-schema-id": "<anonymous-schema-9>"
                  },
                  "minItems": 1,
                  "x-parser-schema-id": "<anonymous-schema-8>"
                }
              },
              "required": [
                "label",
                "entries"
              ],
              "x-parser-schema-id": "<anonymous-schema-7>"
            },
            "minItems": 1,
            "x-parser-schema-id": "<anonymous-schema-6>"
          }
        },
        "required": [
          "id",
          "label",
          "groups"
        ],
        "definitions": {
          "language_coded_texts": "$ref:$.components.schemas.metadata-values.properties.label",
          "vocabulary": "$ref:$.components.schemas.metadata-values.properties.groups.items.properties.entries.items.properties.parameters.anyOf[0]",
          "text": "$ref:$.components.schemas.metadata-values.properties.groups.items.properties.entries.items.properties.parameters.anyOf[1]",
          "number": "$ref:$.components.schemas.metadata-values.properties.groups.items.properties.entries.items.properties.parameters.anyOf[2]",
          "boolean": "$ref:$.components.schemas.metadata-values.properties.groups.items.properties.entries.items.properties.parameters.anyOf[3]",
          "entry": "$ref:$.components.schemas.metadata-values.properties.groups.items.properties.entries.items"
        },
        "x-parser-schema-id": "metadata-profile@iqb-standard@0.9"
      }
    }
  },
  "x-parser-spec-parsed": true,
  "x-parser-api-version": 3,
  "x-parser-spec-stringified": true
};
    const config = {"show":{"sidebar":false},"sidebar":{"showOperations":"byDefault"},"showOperations":false};
    const appRoot = document.getElementById('root');
    AsyncApiStandalone.render(
        { schema, config, }, appRoot
    );
  