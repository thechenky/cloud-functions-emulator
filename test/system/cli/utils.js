/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const _ = require(`lodash`);
const spawnSync = require(`child_process`).spawnSync;
const path = require(`path`);

const env = _.cloneDeep(process.env);

env.XDG_CONFIG_HOME = path.join(__dirname, `../`);

exports.run = (cmd, cwd) => {
  const output = spawnSync(cmd, {
    cwd,
    env,
    shell: true,
    timeout: 10000
  });

  return output.stdout.toString().trim() + output.stderr.toString().trim();
};
