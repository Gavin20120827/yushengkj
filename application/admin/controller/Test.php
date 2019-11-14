<?php
namespace app\admin\controller;
use think\Controller;

class Test extends Controller{

	public function test(){
		return view('admin@test/test');
	}
}