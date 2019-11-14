<?php     

use think\facade\Route;

Route::group(['prefix'=>'index/'],function(){

	Route::get('/','index/index')->name('index/index');

	Route::get('caser','caser/caser')->name('index/caser');

	Route::get('about','about/about')->name('index/about');

	Route::get('product','product/product')->name('index/product');

	Route::get('lst','lst/lst')->name('index/lst');


});




