/*
 * @Author: your name
 * @Date: 2021-04-24 23:35:56
 * @LastEditTime: 2021-04-25 21:57:12
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /reactNativeTs/android/app/src/main/java/com/reactnativets/MainActivity.java
 */
package com.reactnativets;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "reactNativeTs";
  }

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
       return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }
}
