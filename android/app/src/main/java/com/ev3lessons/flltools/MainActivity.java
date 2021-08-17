package com.ev3lessons.flltools;

import android.content.res.Configuration;
import android.webkit.WebSettings;
import android.webkit.WebView;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
  @Override
  public void onStart() {
    super.onStart();
    // Android fix for enabling dark mode
    int nightModeFlags = getResources().getConfiguration().uiMode & Configuration.UI_MODE_NIGHT_MASK;
    WebView mWebView = this.bridge.getWebView();
    WebSettings webSettings = mWebView.getSettings();
    mWebView.addJavascriptInterface(new JavaScriptInterface(getBaseContext()), "Android");
    if (nightModeFlags == Configuration.UI_MODE_NIGHT_YES) {
      webSettings.setForceDark(WebSettings.FORCE_DARK_ON);
    }

  }
}
