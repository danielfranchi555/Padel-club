import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import CardCancha from '../ui/navbar/CardCancha/CardCancha';
import { cookies } from 'next/headers';
export default async function Home({ searchParams }) {
  // get params by url
  // EXAMPLE RETURN { query: '12345' } FROM http://localhost:3000/?query=12345
  // const params = searchParams;
  // const result = params.query;

  const cookieStore = cookies();
  const supabase = await createServerComponentClient({
    cookies: () => cookieStore,
  });
  const { data } = await supabase.from('canchas').select(`
       id_cancha,
     name,
     surface_type,
     available,
     covered,
     horarios(
      id,
      horario_inicio,
      horario_final)
  `);

  return (
    <main>
      canchas:
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 container">
        {data.map((item) => (
          <div key={item}>
            <CardCancha item={item} />
          </div>
        ))}
      </div>
    </main>
  );
}
