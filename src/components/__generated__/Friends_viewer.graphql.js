/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type FriendsList_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Friends_viewer$ref: FragmentReference;
declare export opaque type Friends_viewer$fragmentType: Friends_viewer$ref;
export type Friends_viewer = {|
  +id: string,
  +$fragmentRefs: FriendsList_viewer$ref,
  +$refType: Friends_viewer$ref,
|};
export type Friends_viewer$data = Friends_viewer;
export type Friends_viewer$key = {
  +$data?: Friends_viewer$data,
  +$fragmentRefs: Friends_viewer$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Friends_viewer",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "FriendsList_viewer"
    }
  ],
  "type": "User",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'd759b3799b3efbf0ec54018e7d1a8ec5';

module.exports = node;
