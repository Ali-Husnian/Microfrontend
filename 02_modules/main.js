/*
const { add, substract } = require("./function/index.js");

const output1 = add(2, 3);
const output2 = substract(2, 3);

console.log(output1, output2);
*/

////////// ***************Es6 Method*********** /////////

/*
import { add, substract } from "./function";

const output1 = add(2, 3);
const output2 = substract(2, 3);

console.log(output1, output2);
*/

////////// ***************alias method*********** /////////

import * as $ from "./function";

const output1 = $.add(2, 3);
const output2 = $.substract(2, 3);

console.log(output1, output2);
