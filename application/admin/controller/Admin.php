<?php
namespace app\admin\controller;
use think\Controller;
use app\admin\model\Cate as CateModel;

class Admin extends Controller{
    public function index(){

    	return view('admin@admin/index');
    }

    public function cate(){

    	return CateModel::create(input());
    }




}
