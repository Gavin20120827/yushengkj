<?php
namespace app\admin\controller;
use think\Controller;
use app\admin\model\Cate as CateModel;
use app\admin\model\Product as ProductModel;

class Cate extends Controller{

    protected $beforeActionList = [

        'del'=>['only'=>'delete'],

    ];




	 public function index(){

        $cateModel = new CateModel;
        $req = $cateModel->select();
        $cate =  $cateModel->sort($req);
        return view('admin@cate/index',['cate'=>$cate]);
        
    }
    
    
    
    
    public function create(){
        
        return view('admin@cate/create');
        
        
    }
    
    
    public function save(){
        
        
    }
    
    
    public function edit(){
        
        return view();
    }
    
    
    
    public function update(){
        
        
        
    }
    
    
    
    
    public function delete(int $id){
        
        CateModel::destroy($id);
        ProductModel::where('pro_cateid',$id)->delete();

        return '成功';
        
    }
    
    
    
    
    
    public function read(){
        

        
    }

    public function del(){

        $cateModel = new CateModel;
        $allCate = $cateModel->select();
        $req = $cateModel->getChildrenId($allCate,input('id'));

        foreach ($req as $key => $value) {
            ProductModel::where('pro_cateid',$value)->delete();
        }

            CateModel::destroy($req);
    }

    
    }




