import React from 'react'
import { useState,useEffect} from 'react'
import { connect } from 'react-redux'
function RenderInforStudent(props) {
  // var [isUpdate,setUpdate]=useState(false);
  var [inforNeedEdit,setInforNeedEdit]=useState([]);
  const getItemForEdit =(id)=>{
    let student=props.DanhSachSinhVien.filter(function(item){
      return id==item.maSV;
    });
    // đẩy dữ liệu lên input
    document.getElementById("maSV").value=student[0]['maSV'];
    document.getElementById("full-name").value=student[0]['name'];
    document.getElementById("telephone").value=student[0]['phone'];
    document.getElementById("email").value=student[0]['email'];
    document.getElementById("maSV").disabled=true;
  }
  const renderStudent = () => {
    if (props.modeOfPrint == 'add') {
      return props.DanhSachSinhVien.map((item, index) => {
        return <tr key={index}>
          <td>{item.maSV}</td>
          <td>{item.name}</td>
          <td>{item.phone}</td>
          <td>{item.email}</td>
          <td><button onClick={() => {getItemForEdit(item.maSV)}} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">edit</button></td>
        </tr>
      })
    }else {
      return props.informationStudent.map((item, index) => {
        return <tr key={index}>
          <td>{item.maSV}</td>
          <td>{item.name}</td>
          <td>{item.phone}</td>
          <td>{item.email}</td>
          <td><button onClick={() => {getItemForEdit(item.maSV)}} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">edit</button></td>
        </tr>
      })
    }
  }
  return (
    <div className=''>
      <table className="table-auto max-w-md mx-auto">
        <thead>
          <tr style={{ backgroundColor: '#31373D', color: 'white' }}>
            <th>Mã SV</th>
            <th>Họ tên</th>
            <th>Số điện thoại</th>
            <th className=''>Email</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {renderStudent()}
        </tbody>
      </table>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    DanhSachSinhVien: state.studentReducer.DanhSachSinhVien
  }
}

export default connect(mapStateToProps)(RenderInforStudent);
