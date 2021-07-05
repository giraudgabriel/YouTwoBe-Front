import { useRouter } from "next/dist/client/router"

export default function Room() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <p>Sala teste!</p>
      <p>id da sala: {id}</p>
    </div>
  )
}