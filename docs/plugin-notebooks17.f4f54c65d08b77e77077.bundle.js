"use strict";(self.webpackChunkKuiClientTemplate=self.webpackChunkKuiClientTemplate||[]).push([[13189],{3307:(e,n,r)=>{r.r(n),r.d(n,{default:()=>s});const s="semver(1) -- The semantic versioner for npm\n===========================================\n\n## Install\n\n```bash\nnpm install semver\n````\n\n## Usage\n\nAs a node module:\n\n```js\nconst semver = require('semver')\n\nsemver.valid('1.2.3') // '1.2.3'\nsemver.valid('a.b.c') // null\nsemver.clean('  =v1.2.3   ') // '1.2.3'\nsemver.satisfies('1.2.3', '1.x || >=2.5.0 || 5.0.0 - 7.2.3') // true\nsemver.gt('1.2.3', '9.8.7') // false\nsemver.lt('1.2.3', '9.8.7') // true\nsemver.minVersion('>=1.0.0') // '1.0.0'\nsemver.valid(semver.coerce('v2')) // '2.0.0'\nsemver.valid(semver.coerce('42.6.7.9.3-alpha')) // '42.6.7'\n```\n\nYou can also just load the module for the function that you care about, if\nyou'd like to minimize your footprint.\n\n```js\n// load the whole API at once in a single object\nconst semver = require('semver')\n\n// or just load the bits you need\n// all of them listed here, just pick and choose what you want\n\n// classes\nconst SemVer = require('semver/classes/semver')\nconst Comparator = require('semver/classes/comparator')\nconst Range = require('semver/classes/range')\n\n// functions for working with versions\nconst semverParse = require('semver/functions/parse')\nconst semverValid = require('semver/functions/valid')\nconst semverClean = require('semver/functions/clean')\nconst semverInc = require('semver/functions/inc')\nconst semverDiff = require('semver/functions/diff')\nconst semverMajor = require('semver/functions/major')\nconst semverMinor = require('semver/functions/minor')\nconst semverPatch = require('semver/functions/patch')\nconst semverPrerelease = require('semver/functions/prerelease')\nconst semverCompare = require('semver/functions/compare')\nconst semverRcompare = require('semver/functions/rcompare')\nconst semverCompareLoose = require('semver/functions/compare-loose')\nconst semverCompareBuild = require('semver/functions/compare-build')\nconst semverSort = require('semver/functions/sort')\nconst semverRsort = require('semver/functions/rsort')\n\n// low-level comparators between versions\nconst semverGt = require('semver/functions/gt')\nconst semverLt = require('semver/functions/lt')\nconst semverEq = require('semver/functions/eq')\nconst semverNeq = require('semver/functions/neq')\nconst semverGte = require('semver/functions/gte')\nconst semverLte = require('semver/functions/lte')\nconst semverCmp = require('semver/functions/cmp')\nconst semverCoerce = require('semver/functions/coerce')\n\n// working with ranges\nconst semverSatisfies = require('semver/functions/satisfies')\nconst semverMaxSatisfying = require('semver/ranges/max-satisfying')\nconst semverMinSatisfying = require('semver/ranges/min-satisfying')\nconst semverToComparators = require('semver/ranges/to-comparators')\nconst semverMinVersion = require('semver/ranges/min-version')\nconst semverValidRange = require('semver/ranges/valid')\nconst semverOutside = require('semver/ranges/outside')\nconst semverGtr = require('semver/ranges/gtr')\nconst semverLtr = require('semver/ranges/ltr')\nconst semverIntersects = require('semver/ranges/intersects')\nconst simplifyRange = require('semver/ranges/simplify')\nconst rangeSubset = require('semver/ranges/subset')\n```\n\nAs a command-line utility:\n\n```\n$ semver -h\n\nA JavaScript implementation of the https://semver.org/ specification\nCopyright Isaac Z. Schlueter\n\nUsage: semver [options] <version> [<version> [...]]\nPrints valid versions sorted by SemVer precedence\n\nOptions:\n-r --range <range>\n        Print versions that match the specified range.\n\n-i --increment [<level>]\n        Increment a version by the specified level.  Level can\n        be one of: major, minor, patch, premajor, preminor,\n        prepatch, or prerelease.  Default level is 'patch'.\n        Only one version may be specified.\n\n--preid <identifier>\n        Identifier to be used to prefix premajor, preminor,\n        prepatch or prerelease version increments.\n\n-l --loose\n        Interpret versions and ranges loosely\n\n-p --include-prerelease\n        Always include prerelease versions in range matching\n\n-c --coerce\n        Coerce a string into SemVer if possible\n        (does not imply --loose)\n\n--rtl\n        Coerce version strings right to left\n\n--ltr\n        Coerce version strings left to right (default)\n\nProgram exits successfully if any valid version satisfies\nall supplied ranges, and prints all satisfying versions.\n\nIf no satisfying versions are found, then exits failure.\n\nVersions are printed in ascending order, so supplying\nmultiple versions to the utility will just sort them.\n```\n\n## Versions\n\nA \"version\" is described by the `v2.0.0` specification found at\n<https://semver.org/>.\n\nA leading `\"=\"` or `\"v\"` character is stripped off and ignored.\n\n## Ranges\n\nA `version range` is a set of `comparators` which specify versions\nthat satisfy the range.\n\nA `comparator` is composed of an `operator` and a `version`.  The set\nof primitive `operators` is:\n\n* `<` Less than\n* `<=` Less than or equal to\n* `>` Greater than\n* `>=` Greater than or equal to\n* `=` Equal.  If no operator is specified, then equality is assumed,\n  so this operator is optional, but MAY be included.\n\nFor example, the comparator `>=1.2.7` would match the versions\n`1.2.7`, `1.2.8`, `2.5.3`, and `1.3.9`, but not the versions `1.2.6`\nor `1.1.0`.\n\nComparators can be joined by whitespace to form a `comparator set`,\nwhich is satisfied by the **intersection** of all of the comparators\nit includes.\n\nA range is composed of one or more comparator sets, joined by `||`.  A\nversion matches a range if and only if every comparator in at least\none of the `||`-separated comparator sets is satisfied by the version.\n\nFor example, the range `>=1.2.7 <1.3.0` would match the versions\n`1.2.7`, `1.2.8`, and `1.2.99`, but not the versions `1.2.6`, `1.3.0`,\nor `1.1.0`.\n\nThe range `1.2.7 || >=1.2.9 <2.0.0` would match the versions `1.2.7`,\n`1.2.9`, and `1.4.6`, but not the versions `1.2.8` or `2.0.0`.\n\n### Prerelease Tags\n\nIf a version has a prerelease tag (for example, `1.2.3-alpha.3`) then\nit will only be allowed to satisfy comparator sets if at least one\ncomparator with the same `[major, minor, patch]` tuple also has a\nprerelease tag.\n\nFor example, the range `>1.2.3-alpha.3` would be allowed to match the\nversion `1.2.3-alpha.7`, but it would *not* be satisfied by\n`3.4.5-alpha.9`, even though `3.4.5-alpha.9` is technically \"greater\nthan\" `1.2.3-alpha.3` according to the SemVer sort rules.  The version\nrange only accepts prerelease tags on the `1.2.3` version.  The\nversion `3.4.5` *would* satisfy the range, because it does not have a\nprerelease flag, and `3.4.5` is greater than `1.2.3-alpha.7`.\n\nThe purpose for this behavior is twofold.  First, prerelease versions\nfrequently are updated very quickly, and contain many breaking changes\nthat are (by the author's design) not yet fit for public consumption.\nTherefore, by default, they are excluded from range matching\nsemantics.\n\nSecond, a user who has opted into using a prerelease version has\nclearly indicated the intent to use *that specific* set of\nalpha/beta/rc versions.  By including a prerelease tag in the range,\nthe user is indicating that they are aware of the risk.  However, it\nis still not appropriate to assume that they have opted into taking a\nsimilar risk on the *next* set of prerelease versions.\n\nNote that this behavior can be suppressed (treating all prerelease\nversions as if they were normal versions, for the purpose of range\nmatching) by setting the `includePrerelease` flag on the options\nobject to any\n[functions](https://github.com/npm/node-semver#functions) that do\nrange matching.\n\n#### Prerelease Identifiers\n\nThe method `.inc` takes an additional `identifier` string argument that\nwill append the value of the string as a prerelease identifier:\n\n```javascript\nsemver.inc('1.2.3', 'prerelease', 'beta')\n// '1.2.4-beta.0'\n```\n\ncommand-line example:\n\n```bash\n$ semver 1.2.3 -i prerelease --preid beta\n1.2.4-beta.0\n```\n\nWhich then can be used to increment further:\n\n```bash\n$ semver 1.2.4-beta.0 -i prerelease\n1.2.4-beta.1\n```\n\n### Advanced Range Syntax\n\nAdvanced range syntax desugars to primitive comparators in\ndeterministic ways.\n\nAdvanced ranges may be combined in the same way as primitive\ncomparators using white space or `||`.\n\n#### Hyphen Ranges `X.Y.Z - A.B.C`\n\nSpecifies an inclusive set.\n\n* `1.2.3 - 2.3.4` := `>=1.2.3 <=2.3.4`\n\nIf a partial version is provided as the first version in the inclusive\nrange, then the missing pieces are replaced with zeroes.\n\n* `1.2 - 2.3.4` := `>=1.2.0 <=2.3.4`\n\nIf a partial version is provided as the second version in the\ninclusive range, then all versions that start with the supplied parts\nof the tuple are accepted, but nothing that would be greater than the\nprovided tuple parts.\n\n* `1.2.3 - 2.3` := `>=1.2.3 <2.4.0-0`\n* `1.2.3 - 2` := `>=1.2.3 <3.0.0-0`\n\n#### X-Ranges `1.2.x` `1.X` `1.2.*` `*`\n\nAny of `X`, `x`, or `*` may be used to \"stand in\" for one of the\nnumeric values in the `[major, minor, patch]` tuple.\n\n* `*` := `>=0.0.0` (Any version satisfies)\n* `1.x` := `>=1.0.0 <2.0.0-0` (Matching major version)\n* `1.2.x` := `>=1.2.0 <1.3.0-0` (Matching major and minor versions)\n\nA partial version range is treated as an X-Range, so the special\ncharacter is in fact optional.\n\n* `\"\"` (empty string) := `*` := `>=0.0.0`\n* `1` := `1.x.x` := `>=1.0.0 <2.0.0-0`\n* `1.2` := `1.2.x` := `>=1.2.0 <1.3.0-0`\n\n#### Tilde Ranges `~1.2.3` `~1.2` `~1`\n\nAllows patch-level changes if a minor version is specified on the\ncomparator.  Allows minor-level changes if not.\n\n* `~1.2.3` := `>=1.2.3 <1.(2+1).0` := `>=1.2.3 <1.3.0-0`\n* `~1.2` := `>=1.2.0 <1.(2+1).0` := `>=1.2.0 <1.3.0-0` (Same as `1.2.x`)\n* `~1` := `>=1.0.0 <(1+1).0.0` := `>=1.0.0 <2.0.0-0` (Same as `1.x`)\n* `~0.2.3` := `>=0.2.3 <0.(2+1).0` := `>=0.2.3 <0.3.0-0`\n* `~0.2` := `>=0.2.0 <0.(2+1).0` := `>=0.2.0 <0.3.0-0` (Same as `0.2.x`)\n* `~0` := `>=0.0.0 <(0+1).0.0` := `>=0.0.0 <1.0.0-0` (Same as `0.x`)\n* `~1.2.3-beta.2` := `>=1.2.3-beta.2 <1.3.0-0` Note that prereleases in\n  the `1.2.3` version will be allowed, if they are greater than or\n  equal to `beta.2`.  So, `1.2.3-beta.4` would be allowed, but\n  `1.2.4-beta.2` would not, because it is a prerelease of a\n  different `[major, minor, patch]` tuple.\n\n#### Caret Ranges `^1.2.3` `^0.2.5` `^0.0.4`\n\nAllows changes that do not modify the left-most non-zero element in the\n`[major, minor, patch]` tuple.  In other words, this allows patch and\nminor updates for versions `1.0.0` and above, patch updates for\nversions `0.X >=0.1.0`, and *no* updates for versions `0.0.X`.\n\nMany authors treat a `0.x` version as if the `x` were the major\n\"breaking-change\" indicator.\n\nCaret ranges are ideal when an author may make breaking changes\nbetween `0.2.4` and `0.3.0` releases, which is a common practice.\nHowever, it presumes that there will *not* be breaking changes between\n`0.2.4` and `0.2.5`.  It allows for changes that are presumed to be\nadditive (but non-breaking), according to commonly observed practices.\n\n* `^1.2.3` := `>=1.2.3 <2.0.0-0`\n* `^0.2.3` := `>=0.2.3 <0.3.0-0`\n* `^0.0.3` := `>=0.0.3 <0.0.4-0`\n* `^1.2.3-beta.2` := `>=1.2.3-beta.2 <2.0.0-0` Note that prereleases in\n  the `1.2.3` version will be allowed, if they are greater than or\n  equal to `beta.2`.  So, `1.2.3-beta.4` would be allowed, but\n  `1.2.4-beta.2` would not, because it is a prerelease of a\n  different `[major, minor, patch]` tuple.\n* `^0.0.3-beta` := `>=0.0.3-beta <0.0.4-0`  Note that prereleases in the\n  `0.0.3` version *only* will be allowed, if they are greater than or\n  equal to `beta`.  So, `0.0.3-pr.2` would be allowed.\n\nWhen parsing caret ranges, a missing `patch` value desugars to the\nnumber `0`, but will allow flexibility within that value, even if the\nmajor and minor versions are both `0`.\n\n* `^1.2.x` := `>=1.2.0 <2.0.0-0`\n* `^0.0.x` := `>=0.0.0 <0.1.0-0`\n* `^0.0` := `>=0.0.0 <0.1.0-0`\n\nA missing `minor` and `patch` values will desugar to zero, but also\nallow flexibility within those values, even if the major version is\nzero.\n\n* `^1.x` := `>=1.0.0 <2.0.0-0`\n* `^0.x` := `>=0.0.0 <1.0.0-0`\n\n### Range Grammar\n\nPutting all this together, here is a Backus-Naur grammar for ranges,\nfor the benefit of parser authors:\n\n```bnf\nrange-set  ::= range ( logical-or range ) *\nlogical-or ::= ( ' ' ) * '||' ( ' ' ) *\nrange      ::= hyphen | simple ( ' ' simple ) * | ''\nhyphen     ::= partial ' - ' partial\nsimple     ::= primitive | partial | tilde | caret\nprimitive  ::= ( '<' | '>' | '>=' | '<=' | '=' ) partial\npartial    ::= xr ( '.' xr ( '.' xr qualifier ? )? )?\nxr         ::= 'x' | 'X' | '*' | nr\nnr         ::= '0' | ['1'-'9'] ( ['0'-'9'] ) *\ntilde      ::= '~' partial\ncaret      ::= '^' partial\nqualifier  ::= ( '-' pre )? ( '+' build )?\npre        ::= parts\nbuild      ::= parts\nparts      ::= part ( '.' part ) *\npart       ::= nr | [-0-9A-Za-z]+\n```\n\n## Functions\n\nAll methods and classes take a final `options` object argument.  All\noptions in this object are `false` by default.  The options supported\nare:\n\n- `loose`  Be more forgiving about not-quite-valid semver strings.\n  (Any resulting output will always be 100% strict compliant, of\n  course.)  For backwards compatibility reasons, if the `options`\n  argument is a boolean value instead of an object, it is interpreted\n  to be the `loose` param.\n- `includePrerelease`  Set to suppress the [default\n  behavior](https://github.com/npm/node-semver#prerelease-tags) of\n  excluding prerelease tagged versions from ranges unless they are\n  explicitly opted into.\n\nStrict-mode Comparators and Ranges will be strict about the SemVer\nstrings that they parse.\n\n* `valid(v)`: Return the parsed version, or null if it's not valid.\n* `inc(v, release)`: Return the version incremented by the release\n  type (`major`,   `premajor`, `minor`, `preminor`, `patch`,\n  `prepatch`, or `prerelease`), or null if it's not valid\n  * `premajor` in one call will bump the version up to the next major\n    version and down to a prerelease of that major version.\n    `preminor`, and `prepatch` work the same way.\n  * If called from a non-prerelease version, the `prerelease` will work the\n    same as `prepatch`. It increments the patch version, then makes a\n    prerelease. If the input version is already a prerelease it simply\n    increments it.\n* `prerelease(v)`: Returns an array of prerelease components, or null\n  if none exist. Example: `prerelease('1.2.3-alpha.1') -> ['alpha', 1]`\n* `major(v)`: Return the major version number.\n* `minor(v)`: Return the minor version number.\n* `patch(v)`: Return the patch version number.\n* `intersects(r1, r2, loose)`: Return true if the two supplied ranges\n  or comparators intersect.\n* `parse(v)`: Attempt to parse a string as a semantic version, returning either\n  a `SemVer` object or `null`.\n\n### Comparison\n\n* `gt(v1, v2)`: `v1 > v2`\n* `gte(v1, v2)`: `v1 >= v2`\n* `lt(v1, v2)`: `v1 < v2`\n* `lte(v1, v2)`: `v1 <= v2`\n* `eq(v1, v2)`: `v1 == v2` This is true if they're logically equivalent,\n  even if they're not the exact same string.  You already know how to\n  compare strings.\n* `neq(v1, v2)`: `v1 != v2` The opposite of `eq`.\n* `cmp(v1, comparator, v2)`: Pass in a comparison string, and it'll call\n  the corresponding function above.  `\"===\"` and `\"!==\"` do simple\n  string comparison, but are included for completeness.  Throws if an\n  invalid comparison string is provided.\n* `compare(v1, v2)`: Return `0` if `v1 == v2`, or `1` if `v1` is greater, or `-1` if\n  `v2` is greater.  Sorts in ascending order if passed to `Array.sort()`.\n* `rcompare(v1, v2)`: The reverse of compare.  Sorts an array of versions\n  in descending order when passed to `Array.sort()`.\n* `compareBuild(v1, v2)`: The same as `compare` but considers `build` when two versions\n  are equal.  Sorts in ascending order if passed to `Array.sort()`.\n  `v2` is greater.  Sorts in ascending order if passed to `Array.sort()`.\n* `diff(v1, v2)`: Returns difference between two versions by the release type\n  (`major`, `premajor`, `minor`, `preminor`, `patch`, `prepatch`, or `prerelease`),\n  or null if the versions are the same.\n\n### Comparators\n\n* `intersects(comparator)`: Return true if the comparators intersect\n\n### Ranges\n\n* `validRange(range)`: Return the valid range or null if it's not valid\n* `satisfies(version, range)`: Return true if the version satisfies the\n  range.\n* `maxSatisfying(versions, range)`: Return the highest version in the list\n  that satisfies the range, or `null` if none of them do.\n* `minSatisfying(versions, range)`: Return the lowest version in the list\n  that satisfies the range, or `null` if none of them do.\n* `minVersion(range)`: Return the lowest version that can possibly match\n  the given range.\n* `gtr(version, range)`: Return `true` if version is greater than all the\n  versions possible in the range.\n* `ltr(version, range)`: Return `true` if version is less than all the\n  versions possible in the range.\n* `outside(version, range, hilo)`: Return true if the version is outside\n  the bounds of the range in either the high or low direction.  The\n  `hilo` argument must be either the string `'>'` or `'<'`.  (This is\n  the function called by `gtr` and `ltr`.)\n* `intersects(range)`: Return true if any of the ranges comparators intersect\n* `simplifyRange(versions, range)`: Return a \"simplified\" range that\n  matches the same items in `versions` list as the range specified.  Note\n  that it does *not* guarantee that it would match the same versions in all\n  cases, only for the set of versions provided.  This is useful when\n  generating ranges by joining together multiple versions with `||`\n  programmatically, to provide the user with something a bit more\n  ergonomic.  If the provided range is shorter in string-length than the\n  generated range, then that is returned.\n* `subset(subRange, superRange)`: Return `true` if the `subRange` range is\n  entirely contained by the `superRange` range.\n\nNote that, since ranges may be non-contiguous, a version might not be\ngreater than a range, less than a range, *or* satisfy a range!  For\nexample, the range `1.2 <1.2.9 || >2.0.0` would have a hole from `1.2.9`\nuntil `2.0.0`, so the version `1.2.10` would not be greater than the\nrange (because `2.0.1` satisfies, which is higher), nor less than the\nrange (since `1.2.8` satisfies, which is lower), and it also does not\nsatisfy the range.\n\nIf you want to know if a version satisfies or does not satisfy a\nrange, use the `satisfies(version, range)` function.\n\n### Coercion\n\n* `coerce(version, options)`: Coerces a string to semver if possible\n\nThis aims to provide a very forgiving translation of a non-semver string to\nsemver. It looks for the first digit in a string, and consumes all\nremaining characters which satisfy at least a partial semver (e.g., `1`,\n`1.2`, `1.2.3`) up to the max permitted length (256 characters).  Longer\nversions are simply truncated (`4.6.3.9.2-alpha2` becomes `4.6.3`).  All\nsurrounding text is simply ignored (`v3.4 replaces v3.3.1` becomes\n`3.4.0`).  Only text which lacks digits will fail coercion (`version one`\nis not valid).  The maximum  length for any semver component considered for\ncoercion is 16 characters; longer components will be ignored\n(`10000000000000000.4.7.4` becomes `4.7.4`).  The maximum value for any\nsemver component is `Number.MAX_SAFE_INTEGER || (2**53 - 1)`; higher value\ncomponents are invalid (`9999999999999999.4.7.4` is likely invalid).\n\nIf the `options.rtl` flag is set, then `coerce` will return the right-most\ncoercible tuple that does not share an ending index with a longer coercible\ntuple.  For example, `1.2.3.4` will return `2.3.4` in rtl mode, not\n`4.0.0`.  `1.2.3/4` will return `4.0.0`, because the `4` is not a part of\nany other overlapping SemVer tuple.\n\n### Clean\n\n* `clean(version)`: Clean a string to be a valid semver if possible\n\nThis will return a cleaned and trimmed semver version. If the provided\nversion is not valid a null will be returned. This does not work for\nranges.\n\nex.\n* `s.clean(' = v 2.1.5foo')`: `null`\n* `s.clean(' = v 2.1.5foo', { loose: true })`: `'2.1.5-foo'`\n* `s.clean(' = v 2.1.5-foo')`: `null`\n* `s.clean(' = v 2.1.5-foo', { loose: true })`: `'2.1.5-foo'`\n* `s.clean('=v2.1.5')`: `'2.1.5'`\n* `s.clean('  =v2.1.5')`: `2.1.5`\n* `s.clean('      2.1.5   ')`: `'2.1.5'`\n* `s.clean('~1.0.0')`: `null`\n\n## Exported Modules\n\n\x3c!--\nTODO: Make sure that all of these items are documented (classes aren't,\neg), and then pull the module name into the documentation for that specific\nthing.\n--\x3e\n\nYou may pull in just the part of this semver utility that you need, if you\nare sensitive to packing and tree-shaking concerns.  The main\n`require('semver')` export uses getter functions to lazily load the parts\nof the API that are used.\n\nThe following modules are available:\n\n* `require('semver')`\n* `require('semver/classes')`\n* `require('semver/classes/comparator')`\n* `require('semver/classes/range')`\n* `require('semver/classes/semver')`\n* `require('semver/functions/clean')`\n* `require('semver/functions/cmp')`\n* `require('semver/functions/coerce')`\n* `require('semver/functions/compare')`\n* `require('semver/functions/compare-build')`\n* `require('semver/functions/compare-loose')`\n* `require('semver/functions/diff')`\n* `require('semver/functions/eq')`\n* `require('semver/functions/gt')`\n* `require('semver/functions/gte')`\n* `require('semver/functions/inc')`\n* `require('semver/functions/lt')`\n* `require('semver/functions/lte')`\n* `require('semver/functions/major')`\n* `require('semver/functions/minor')`\n* `require('semver/functions/neq')`\n* `require('semver/functions/parse')`\n* `require('semver/functions/patch')`\n* `require('semver/functions/prerelease')`\n* `require('semver/functions/rcompare')`\n* `require('semver/functions/rsort')`\n* `require('semver/functions/satisfies')`\n* `require('semver/functions/sort')`\n* `require('semver/functions/valid')`\n* `require('semver/ranges/gtr')`\n* `require('semver/ranges/intersects')`\n* `require('semver/ranges/ltr')`\n* `require('semver/ranges/max-satisfying')`\n* `require('semver/ranges/min-satisfying')`\n* `require('semver/ranges/min-version')`\n* `require('semver/ranges/outside')`\n* `require('semver/ranges/to-comparators')`\n* `require('semver/ranges/valid')`\n"}}]);