const stateDefault={
    DanhSachSinhVien:[]
};
const studentReducer=(state=stateDefault,action)=>{
    switch(action.type){
        case 'Them_SinhVien':{
            let maSV=document.getElementById("maSV").value;
            let name=document.getElementById("full-name").value;
            let phone=document.getElementById("telephone").value;
            let email=document.getElementById("email").value;
            action.SinhVien['maSV']=maSV;
            action.SinhVien['name']=name;
            action.SinhVien['phone']=phone;
            action.SinhVien['email']=email;
            let updateDanhSachSinhVien=[...state.DanhSachSinhVien];
            updateDanhSachSinhVien.push(action.SinhVien);
            // console.log("updateSinhVien: ",updateDanhSachSinhVien);
            state.DanhSachSinhVien=updateDanhSachSinhVien;
            // console.log("DanhSachSinhVien: ",state.DanhSachSinhVien);
            return {...state};
        }
        case 'CapNhat_SinhVien':{
            return {...state};
        }
        default: return {...state};
    }
}
export default studentReducer;