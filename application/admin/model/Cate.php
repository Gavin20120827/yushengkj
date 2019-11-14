<?php
namespace app\admin\model;
use think\Model;

class Cate extends Model{

	public function sort($data,$pid=1,$level=0){

		static $arr = array();

		foreach ($data as $key => $value) {
			
			if ($value['pid']==$pid) {
				$value['level'] = $level;
				$arr[] = $value;

				$this->sort($data,$value['id'],$level+1);
			}
		}

		return $arr;
	}



	public function getChildrenId($data,$id){
		static $arr = array();
		foreach ($data as $key=>$value){

			if ($value['pid']==$id) {
				$arr[] = $value['id'];

				$this->getChildrenId($data,$value['id']);
			}

		}

		return $arr;
	}














	}
