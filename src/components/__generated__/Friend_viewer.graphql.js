/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Friend_viewer$ref: FragmentReference;
declare export opaque type Friend_viewer$fragmentType: Friend_viewer$ref;
export type Friend_viewer = {|
  +id: string,
  +$refType: Friend_viewer$ref,
|};
export type Friend_viewer$data = Friend_viewer;
export type Friend_viewer$key = {
  +$data?: Friend_viewer$data,
  +$fragmentRefs: Friend_viewer$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Friend_viewer",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '8b2905472498407e7618eca359adf2fc';

module.exports = node;
