<?php
namespace app\admin\controller;
use think\Controller;
use app\admin\model\Product as ProductModel;
use app\admin\model\Cate as CateModel;


class Product extends Controller{

    protected $beforeActionList = [

        'beUpdate'=>['only'=>'update'],

    ];

	 public function index(){

       $pro =  ProductModel::select();


       return view('admin@product/index',['pro'=>$pro]);
        
   
    }
    
    
    
    
    public function create(){

        $cate = CateModel::select();
        $cateModel = new CateModel;
        $req = $cateModel->sort($cate);

        return view('admin@product/create',['cate'=>$req]);
        
    }
    
    
    public function save(){

       if (ProductModel::create(input())) {
            $this->success('新增成功',root_path().'/admin/product');
        } ;

    }
    
    
    public function edit(int $id){

         $cate = CateModel::select();
        $cateModel = new CateModel;
        $req = $cateModel->sort($cate);

        $pro = ProductModel::find($id);

        return view('admin@product/edit',['cate'=>$req,'pro'=>$pro]);
    }
    
    
    
    public function update(int $id){

        if (ProductModel::update(['id'=>$id,input()]) != false) {
            $this->success('修改成功',root_path().'/admin/product');
        };
        
    }


    
    
    public function delete(){
        
        
        
        
    }
    
    
    
    
    
    public function read(){
        
        
        
        
        
    }
    
    




}