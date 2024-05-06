import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

export default function Sunday() {
  const oneOneCourses = () => [
    {
      courseName:"Discrete Mathematics",
      courseCode:3,
      courseTeacher:"Mousumi Hasan Mukti"
    }
  ]

  return (
    <div className="p-10">
        <h1 className="text-4xl text-center m-5">Sunday</h1>
      <Table className='border border-black'>
  <TableHeader>
    <TableRow className="border">
      <TableHead className="w-[100px] border text-center">Batch</TableHead>
      <TableHead className="border text-center">8:30-9:25</TableHead>
      <TableHead className="border text-center">9:30-10:25</TableHead>
      <TableHead className="border text-center">10:30-11:25</TableHead>
      <TableHead className="border text-center">11:35-12:30</TableHead>
      <TableHead className="border text-center">12:35-2:30</TableHead>
      <TableHead className="border text-center">2:35-3:30</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody >
    <TableRow className="border">
      <TableCell className="font-medium border text-center">4-II</TableCell>
      <TableCell className="border text-center">Course Teacher: {oneOneCourses().courseTeacher}<br></br>Course Code: <br></br>Room No: </TableCell>
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell>      
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell>
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell> 
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell> 
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell> 
    </TableRow>
    <TableRow className="border">
      <TableCell className="font-medium border text-center">4-I</TableCell>
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell>
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell>      
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell>
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell> 
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell> 
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell> 
    </TableRow>
    <TableRow className="border">
      <TableCell className="font-medium border text-center">3-II</TableCell>
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell>
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell>      
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell>
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell> 
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell> 
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell> 
    </TableRow>
    <TableRow className="border">
      <TableCell className="font-medium border text-center">3-I</TableCell>
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell>
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell>      
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell>
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell> 
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell> 
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell> 
    </TableRow>
    <TableRow className="border">
      <TableCell className="font-medium border text-center">2-II</TableCell>
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell>
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell>      
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell>
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell> 
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell> 
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell> 
    </TableRow>
    <TableRow className="border">
      <TableCell className="font-medium border text-center">2-I</TableCell>
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell>
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell>      
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell>
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell> 
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell> 
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell> 
    </TableRow>
    <TableRow className="border">
      <TableCell className="font-medium border text-center">1-II</TableCell>
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell>
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell>      
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell>
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell> 
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell> 
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell> 
    </TableRow>
    <TableRow className="border">
      <TableCell className="font-medium border text-center">1-I</TableCell>
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell>
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell>      
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell>
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell> 
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell> 
      <TableCell className="border text-center">Course Teacher: <br></br>Course Code: <br></br>Room No: </TableCell> 
    </TableRow>
    
  </TableBody>
</Table>

    </div>
  )
}