# Fonts

Static TTF files embedded by the `expo-font` config plugin (`app.config.ts`). Each file is named after its PostScript name, which is the `fontFamily` string used on both platforms (`src/lib/theme/font-face.ts` maps a type role to it).

| Family            | Files                                                              | Copyright and source                                                     | Licence                                           |
| ----------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------- |
| Newsreader        | `Newsreader-Light`, `Newsreader-LightItalic`, `Newsreader-Regular` | The Newsreader Project Authors (github.com/productiontype/Newsreader)    | SIL OFL 1.1, `licenses/OFL-newsreader.txt`        |
| Source Serif 4    | `SourceSerif4-Light`, `-Regular`, `-Medium`                        | The Source Serif 4 Project Authors (github.com/adobe-fonts/source-serif) | SIL OFL 1.1, `licenses/OFL-source-serif-4.txt`    |
| Work Sans         | `WorkSans-Regular`, `WorkSans-Medium`                              | The Work Sans Project Authors (github.com/weiweihuanghuang/Work-Sans)    | SIL OFL 1.1, `licenses/OFL-work-sans.txt`         |
| Gentium Book Plus | `GentiumBookPlus`                                                  | SIL International, Reserved Font Names "Gentium" and "SIL"               | SIL OFL 1.1, `licenses/OFL-gentium-book-plus.txt` |
| Noto Serif Hebrew | `NotoSerifHebrew-Regular`                                          | The Noto Project Authors (github.com/notofonts/hebrew)                   | SIL OFL 1.1, `licenses/OFL-noto-serif-hebrew.txt` |

The static files come unmodified from the `@expo-google-fonts/*` npm packages (newsreader 0.4.1, source-serif-4 0.4.2, work-sans 0.4.2, gentium-book-plus 0.4.0, noto-serif-hebrew 0.4.2), which republish the Google Fonts builds; only the file names were changed to the PostScript names. Do not edit the glyphs or the internal names of Gentium Book Plus: the Reserved Font Names forbid a modified version under the same name.

`probe/` holds the two variable fonts from google/fonts (`ofl/newsreader`, `ofl/sourceserif4`, same OFL licences) used only by the technical check screen to test `fontVariationSettings` with the `opsz` axis. They are not part of the type system and can be deleted with the probe section once the optical-size decision is taken.
