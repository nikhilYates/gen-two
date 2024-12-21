import { NextRequest, NextResponse } from 'next/server'
import { Database } from '@/lib/definitions'
import { env } from '@/env'

import { createClient } from '@supabase/supabase-js'

export async function POST(request: NextRequest) {
  try {
    // Initialize Supabase client
    const supabase = createClient<Database>(
      env.NEXT_PUBLIC_SUPABASE_URL,
      env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )

    const { name, email, message } = await request.json()
    console.log( name, email, message);

    const { data, error } = await supabase
      .from('contact_information')
      .insert([
        {
          name,
          email, 
          message
        }
      ])

    if (error) {
      console.log('error: ', error);
      return NextResponse.json(
        { error: 'Failed to submit contact information' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Contact information submitted successfully' },
      { status: 200 }
    )

  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
