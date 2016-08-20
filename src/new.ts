import * as Fs from 'fs';
import * as Path from 'path';
import { workspace as Workspace, window as Window } from 'vscode';

import * as Messages from './messages';
import { packageExists } from './utils';
import { runCommand } from './run-command';
export default function () {
  
    if (!Workspace.rootPath) {
        Messages.noProjectOpenError();
        return;
    }
  const options = {
        Layout: 'post',
        Title: 'Hello World'
    };

    Window.showInputBox({
        prompt: 'Input Layout',
        placeHolder: 'post is the default layout'
    })
    .then((value) => {
        
        if (value) {
            options.Layout = value.toLowerCase();
        }
       
        return Window.showInputBox({
            prompt: 'Input title',
            placeHolder: '',
            value: 'Hello World'
        });
    })
    .then((value) => {
        if (value) {
            options.Title = value;
        }
        runCommand(['new', options.Layout,options.Title])
    });
};