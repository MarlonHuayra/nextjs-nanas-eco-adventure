import { NextResponse } from "next/server"
import { db } from "@/libs/mysql"

export  async function GET(){
  const result = await db.query('SELECT NOW()')
  //console.log(result)

  return NextResponse.json({message: result[0]["NOW()"]})
}

/*export function POST(){
  return NextResponse.json("creando Producto")
}*/