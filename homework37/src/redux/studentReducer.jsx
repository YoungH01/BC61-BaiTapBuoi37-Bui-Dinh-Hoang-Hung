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
            let maSV=document.getElementById("maSV").value;
            let name=document.getElementById("full-name").value;
            let phone=document.getElementById("telephone").value;
            let email=document.getElementById("email").value;
            let updateDanhSachSinhVien=[...state.DanhSachSinhVien];
            for(let i=0;i<updateDanhSachSinhVien.length;i++){
                if(updateDanhSachSinhVien[i].maSV==action.id){
                    updateDanhSachSinhVien[i]['maSV']=maSV;
                    updateDanhSachSinhVien[i]['name']=name;
                    updateDanhSachSinhVien[i]['phone']=phone;
                    updateDanhSachSinhVien[i]['email']=email;
                    break;
                }
            }
            state.DanhSachSinhVien=updateDanhSachSinhVien;
            return {...state};
        }
        default: return {...state};
    }
}
export default studentReducer;