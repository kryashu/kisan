import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'splash',
        pathMatch: 'full'
    },
    {
        path: 'signin',
        loadChildren: () => import('./auth/signin/signin.module').then(m => m.SigninPageModule)
    },
    {
        path: 'signup',
        loadChildren: () => import('./auth/signup/signup.module').then(m => m.SignupPageModule)
    },
    {
        path: 'splash',
        loadChildren: () => import('./splash/splash.module').then(m => m.SplashPageModule)
    },
    {
        path: 'select-language',
        loadChildren: () => import('./auth/select-language/select-language.module').then(m => m.SelectLanguagePageModule)
    },
    {
        path: 'verify-otp',
        loadChildren: () => import('./auth/verify-otp/verify-otp.module').then(m => m.VerifyOtpPageModule)
    },
    {
        path: 'trade-home',
        loadChildren: () => import('./trade/trade-home/trade-home.module').then(m => m.TradeHomePageModule)
    },
    {
        path: 'trade-post',
        loadChildren: () => import('./trade/trade-post/trade-post.module').then(m => m.TradePostPageModule)
    },
    {
        path: 'trade-details',
        loadChildren: () => import('./trade/trade-details/trade-details.module').then(m => m.TradeDetailsPageModule)
    },
    {
        path: 'mandi',
        loadChildren: () => import('./mandi/mandi.module').then(m => m.MandiPageModule)
    },
    {
        path: 'weather',
        loadChildren: () => import('./weather/weather.module').then(m => m.WeatherPageModule)
    },
  {
    path: 'crop-list',
    loadChildren: () => import('./info/crop-list/crop-list.module').then( m => m.CropListPageModule)
  },
  {
    path: 'crop-info',
    loadChildren: () => import('./info/crop-info/crop-info.module').then( m => m.CropInfoPageModule)
  },
  {
    path: 'problem-info',
    loadChildren: () => import('./info/problem-info/problem-info.module').then( m => m.ProblemInfoPageModule)
  },
  {
    path: 'my-requests',
    loadChildren: () => import('./trade/my-requests/my-requests.module').then( m => m.MyRequestsPageModule)
  },
  {
    path: 'category-list',
    loadChildren: () => import('./shop/category-list/category-list.module').then( m => m.CategoryListPageModule)
  },
  {
    path: 'product-list',
    loadChildren: () => import('./shop/product-list/product-list.module').then( m => m.ProductListPageModule)
  },
  {
    path: 'product-details',
    loadChildren: () => import('./shop/product-details/product-details.module').then( m => m.ProductDetailsPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./shop/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'add-address',
    loadChildren: () => import('./address/add-address/add-address.module').then( m => m.AddAddressPageModule)
  },
  {
    path: 'edit-address',
    loadChildren: () => import('./address/edit-address/edit-address.module').then( m => m.EditAddressPageModule)
  },
  {
    path: 'address-list',
    loadChildren: () => import('./address/address-list/address-list.module').then( m => m.AddressListPageModule)
  },
  {
    path: 'order-list',
    loadChildren: () => import('./orders/order-list/order-list.module').then( m => m.OrderListPageModule)
  },
  {
    path: 'order-details',
    loadChildren: () => import('./orders/order-details/order-details.module').then( m => m.OrderDetailsPageModule)
  },
  {
    path: 'track-order',
    loadChildren: () => import('./orders/track-order/track-order.module').then( m => m.TrackOrderPageModule)
  },
  {
    path: 'custom-sell-request',
    loadChildren: () => import('./trade/custom-sell-request/custom-sell-request.module').then( m => m.CustomSellRequestPageModule)
  },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
