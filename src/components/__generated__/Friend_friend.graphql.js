/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Friend_friend$ref: FragmentReference;
declare export opaque type Friend_friend$fragmentType: Friend_friend$ref;
export type Friend_friend = {|
  +id: string,
  +firstName: ?string,
  +lastName: ?string,
  +gender: ?string,
  +language: ?string,
  +email: ?string,
  +image: ?string,
  +$refType: Friend_friend$ref,
|};
export type Friend_friend$data = Friend_friend;
export type Friend_friend$key = {
  +$data?: Friend_friend$data,
  +$fragmentRefs: Friend_friend$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Friend_friend",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "firstName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "lastName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "gender",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "language",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "image",
      "storageKey": null
    }
  ],
  "type": "Friend",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'abdb9e2fb5925ca88a493e1345efbdee';

module.exports = node;
