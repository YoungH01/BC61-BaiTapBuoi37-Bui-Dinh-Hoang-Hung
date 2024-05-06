import React from 'react'
import { useState,useEffect } from 'react';
import { connect } from 'react-redux'
import RenderInforStudent from './RenderInforStudent'
function FormStudent(props) {
  var arr = { maSV: "", name: "", phone: "", email: "" };
  var [modeOfPrint,editMode]=useState("");
  var [informationStudent,editDataStudent]=useState([]);
  var [getIdUpdate,setIdUpdate]=useState(-1);
  const afterSubmission = (event) => {
    event.preventDefault();
    document.getElementById("maSV").value = '';
    document.getElementById("full-name").value = '';
    document.getElementById("telephone").value = '';
    document.getElementById("email").value = '';
    document.getElementById("default-search").value='';
    document.getElementById("maSV").disabled=false;
  }
  const addStudent = () => {
    let maSV = document.getElementById("maSV").value;
    let check=false;
    for (const item of props.DanhSachSinhVien) {
      console.log("item: ", item);
      console.log(maSV);
      if (item.maSV == maSV) {
        check = true;
        break;
      }
    }
    if(check==false){
      props.themSinhVien(arr);
    }else alert("ID đã có người dùng rồi!");
    editMode("add");
  }
  const searchStudent = () => {
    let id = document.getElementById("default-search").value;
    let student = props.DanhSachSinhVien.filter(function (item) {
      return item.maSV == id;
    });
    editDataStudent(informationStudent=student);
    if (informationStudent.length == 0) alert("không có id nào phù hợp");
    else{
      editMode("search");
    }
  }
  const updateStatus=()=>{
    let id=document.getElementById("maSV").value;
    setIdUpdate(getIdUpdate=id);
  }
  useEffect(()=>{
      props.capNhatSinhVien(getIdUpdate);
  },[getIdUpdate])
  return (
    <div className=''>
      <form onSubmit={afterSubmission}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-center text-base font-semibold leading-7 text-gray-900">Thông tin sinh viên</h2>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Mã sinh viên</label>
                <div className="mt-2">
                  <input type="text" name="first-name" id="maSV" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">tên</label>
                <div className="mt-2">
                  <input type="text" name="last-name" id="full-name" autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Số điện thoại</label>
                <div className="mt-2">
                  <input type="text" name="telephone" id="telephone" autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div className="mt-2">
                  <input id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* button add */}
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button id="btnSubmit" onClick={() => {addStudent()}} type="submit" className="rounded-md bg-lime-500	 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Thêm sinh viên</button>
          <button id="btnSubmit" onClick={() => {updateStatus()}} type="submit" className="rounded-md bg-indigo-600	 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Cập nhật </button>
        </div>
      </form>
      {/* form for search */}
      <form style={{marginTop:"20px",marginBottom:"20px"}} onSubmit={afterSubmission} className="max-w-md mx-auto">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"  fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Please enter ID" required />
          <button onClick={() => {searchStudent()}} type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
      </form>
      <RenderInforStudent modeOfPrint={modeOfPrint}  informationStudent={informationStudent}/>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    DanhSachSinhVien: state.studentReducer.DanhSachSinhVien
  }
}
const mapDispatchToProps = dispatch => {
  return {
    themSinhVien: (SinhVien) => {
      dispatch({
        type: 'Them_SinhVien',
        SinhVien: SinhVien
      })
    },
    capNhatSinhVien:(id)=>{
      dispatch({
        type: 'CapNhat_SinhVien',
        id:id
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormStudent);
