'use client';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

export function Alert({ fecha, data }) {
  // QUERY INSERT DATA "RESERVAS"

  const handleSubmit = (e) => {
    e.preventDefault();
    // const object = {
    //   id_horario: 1,
    //   horario_inicio: data.horario_inicio,
    //   horario_final: data.horario_final,
    //   fecha: fecha,
    // };
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Reservar</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Reservar el turno de 08 a 09 am el dia {fecha}?
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <form onSubmit={handleSubmit}>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction type="submit">Continue</AlertDialogAction>
          </form>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
