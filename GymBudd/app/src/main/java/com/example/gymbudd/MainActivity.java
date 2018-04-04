package com.example.gymbudd;

import android.app.Activity;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.webkit.GeolocationPermissions;
import android.webkit.WebChromeClient;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends Activity {
	private WebView webViewer;
	private JavaScriptInterFace javaScriptInterFace;

	public class GeoWebChromeClient extends WebChromeClient {
		@Override
		public void onGeolocationPermissionsShowPrompt(String origin, GeolocationPermissions.Callback callback) {
			callback.invoke(origin, true, false);
		}
	}

	@Override
	protected void onCreate(Bundle savedInstanceState) {

		super.onCreate(savedInstanceState);

		setContentView(R.layout.activity_main);

		webViewer = (WebView) findViewById(R.id.webView);
		javaScriptInterFace = new JavaScriptInterFace(this);
		webViewer.addJavascriptInterface(javaScriptInterFace, "AndroidFunction");
		webViewer.getSettings().setJavaScriptEnabled(true);
		webViewer.getSettings().setSaveFormData(true);
		webViewer.getSettings().setDomStorageEnabled(true);
		webViewer.getSettings().setDatabaseEnabled(true);

		webViewer.setWebViewClient(new WebViewClient());
		webViewer.getSettings().setBuiltInZoomControls(false);


		webViewer.getSettings().setGeolocationEnabled(true);
		webViewer.setWebChromeClient(new GeoWebChromeClient());

		if (Build.VERSION.SDK_INT >= 19) {
			// chromium, enable hardware acceleration
			webViewer.setLayerType(View.LAYER_TYPE_HARDWARE, null);
		}

		webViewer.loadUrl("file:///android_asset/www/index.html");

	}
}