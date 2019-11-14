<?php 

use think\facade\Route;

Route::group('admin/',function(){

	 Route::group(['prefix'=>'admin/'],function(){

	    Route::get('index','admin/index');


	    //导航的增删改查
	    Route::resource('cate','cate');
	    Route::get('cate/del/:id','cate/delete');

	    //产品的增删改查
	    Route::resource('product','product');

	    Route::get('test','test/test');

});

   

});













 ?>




