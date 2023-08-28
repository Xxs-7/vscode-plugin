import * as assert from "assert";

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from "vscode";
// import * as myExtension from '../../extension';

import { formatText } from "../../extension";

suite("Extension Test Suite", () => {
  vscode.window.showInformationMessage("Start all tests.");

  test("Sample test", () => {
    // simple test
    assert.strictEqual("a 中文", formatText("a中文"));
    assert.strictEqual("a 中文", formatText("a 中文"));
    assert.strictEqual("a 中文", formatText("a 中文"));
    assert.strictEqual("中文 a", formatText("中文a"));
    assert.strictEqual("中文 1", formatText("中文1"));
    assert.strictEqual("1 中文 a", formatText("1中文a"));
    assert.strictEqual("a 中文 1", formatText("a中文1"));
  });
});
