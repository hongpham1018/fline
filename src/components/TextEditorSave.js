import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform
} from 'react-native';
import {WebViewQuillEditor, WebViewQuillViewer} from 'react-native-webview-quilljs';
import KeyboardSpacer from 'react-native-keyboard-spacer';

export default class TextEditor extends Component {
  render() {
    return (
      <WebViewQuillEditor
        ref={component => (this.webViewQuillEditor = component)}
        getDeltaCallback={this.getDeltaCallback}
        contentToDisplay="tis"

      />

    );
  }

  onEditorInitialized() {
    this.setFocusHandlers();
    this.getHTML();
  }
  getDeltaCallback(){
    console.log("getDeltaCallback")
  }


  async getHTML() {
    const titleHtml = await this.richtext.getTitleHtml();
    const contentHtml = await this.richtext.getContentHtml();
    //alert(titleHtml + ' ' + contentHtml)
  }

  setFocusHandlers() {
    this.richtext.setTitleFocusHandler(() => {
      //alert('title focus');
    });
    this.richtext.setContentFocusHandler(() => {
      //alert('content focus');
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    paddingTop: 40
  },
  richText: {
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});
