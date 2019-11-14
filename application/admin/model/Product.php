<?php
namespace app\admin\model;
use think\Model;
use think\facade\Env;

class Product extends Model{

	public static function init(){

		 self::event('before_insert',function($pro){

		 	if ($_FILES['pro_pic']['tmp_name']) {

		 		 $file = request()->file('pro_pic');
		 		 $info = $file->move(root_path_other().'/public/static/uploads');

		 		 if($info){
                $pro['pro_pic'] =root_path().'/static/uploads/'.$info->getSaveName();
            }else{
                echo $file->getError();
            }

		 	}

		 });


		  self::event('before_update',function($pro){

		 	if ($_FILES['pro_pic']['tmp_name']) {

		 		 $file = request()->file('pro_pic');
		 		 $info = $file->move(root_path_other().'/public/static/uploads');

		 		 if($info){
                $pro['pro_pic'] =root_path().'/static/uploads/'.$info->getSaveName();

		  	    // $arts = self::find($pro->id);
         //        if($arts->pro_pic){

                	// dump($arts);dump(Env::get('root_path'));die;
                // 	// unlink('D:\xampp\htdocs\yusheng\public/static/uploads/20191114\8e5b8a055063ad32143196917adccfd6.png');
                // }

            }else{
                echo $file->getError();
            }

		 	}

		 });


	}




















}
