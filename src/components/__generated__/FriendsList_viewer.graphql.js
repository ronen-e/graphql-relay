/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Friend_friend$ref = any;
type Friend_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type FriendsList_viewer$ref: FragmentReference;
declare export opaque type FriendsList_viewer$fragmentType: FriendsList_viewer$ref;
export type FriendsList_viewer = {|
  +friends: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: Friend_friend$ref,
      |}
    |}>
  |},
  +id: string,
  +$fragmentRefs: Friend_viewer$ref,
  +$refType: FriendsList_viewer$ref,
|};
export type FriendsList_viewer$data = FriendsList_viewer;
export type FriendsList_viewer$key = {
  +$data?: FriendsList_viewer$data,
  +$fragmentRefs: FriendsList_viewer$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FriendsList_viewer",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "FriendConnection",
      "kind": "LinkedField",
      "name": "friends",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "FriendEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Friend",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "Friend_friend"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Friend_viewer"
    }
  ],
  "type": "User",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = '633a81b44918d1dd9a4b7d48420127fc';

module.exports = node;
