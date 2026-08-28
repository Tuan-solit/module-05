function Student(){
    const students = [
        {
            id: 1,
            name: "Nguyen Van A",
            age: 20,
            gender: "nam",
            email:"nguyenvana@gmail.com"
        },
        {
            id: 2,
            name: "Nguyen Van B",
            age: 20,
            gender: "nam",
            email:"nguyenvanb@gmail.com"
        },
        {
            id: 3,
            name: "Nguyen Van C",
            age: 20,
            gender: "nam",
            email:"nguyenvanc@gmail.com"
        },
        {
            id: 4,
            name: "Nguyen Van D",
            age: 20,
            gender: "nam",
            email:"nguyenvand@gmail.com"
        },
    ];
    return(
        <div>
            <h1>Danh sách sinh viên</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Ho ten</th>
                        <th>Tuoi</th>
                        <th>Gioi tinh</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student =>(
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.gender}</td>
                            <td>{student.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default Student;