import NextResponse from 'next/server';
import User from '../../../../models/User';
import { connect } from 'mongoose';

connect();

// GET ALL THE USER
export const GET = async (req) => {
  const users = await User.find({});

  if (!users) return new NextResponse({ message: 'User not found' });

  return new NextResponse(users, { status: 200 });
};

// CREATE USER
export const POST = async (req) => {
  const data = req.body;

  if (!data) {
    return new NextResponse(
      { message: 'All fields are required' },
      { status: 404 }
    );
  }

  const userObj = {
    ...data,
  };

  const user = await User.create(userObj);

  return new NextResponse(user, { status: 201 });
};
