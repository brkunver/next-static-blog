import { NextResponse, } from "next/server"

export async function POST(request) {
  const data = await request.json()
  return NextResponse.json({
    success: true,
    name : data.name.slice(0,100),
    email : data.email.slice(0,100),
    message : data.message.slice(0,255)
  })
}
