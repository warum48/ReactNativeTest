//
//  ViewController.m
//  SpecialProjectsClip
//
//  Created by VADIM RUMYANTSEV on 01.09.2021.
//

#import "ViewController.h"
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@interface ViewController ()

@end

@implementation ViewController

- (void)loadView {
  #if DEBUG
  // When debugging we load the js bundle from the Metro Bundler
  // running on your development machine. "index" is the name of the
  // js file used as an entry point (don't include the extension).
  NSURL *jsCodeLocation = [[RCTBundleURLProvider sharedSettings]
jsBundleURLForBundleRoot:@"indexclip" fallbackResource:nil];
  #else
  // For release builds we add the js bundle to the build.
  // By default the js bundler will create a file called
  // "main.jsbundle" for us.
  NSURL *jsCodeLocation = [[NSBundle mainBundle] 
URLForResource:@"main" withExtension:@"jsbundle"];
  #endif

  // moduleName corresponds to the appName used for the
  // app entry point in "index.js"
  RCTRootView *rootView = [[RCTRootView alloc] 
initWithBundleURL:jsCodeLocation moduleName:@"ReactNativeTest" 
initialProperties:nil launchOptions:nil];
  // Default to a white background.
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f 
green:1.0f blue:1.0f alpha:1];
  self.view = rootView;
}

- (void)viewDidLoad {
  [super viewDidLoad];
  // Do any additional setup after loading the view.
}
@end
