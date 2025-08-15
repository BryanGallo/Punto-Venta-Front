export default function CouponForm() {
  return (
        <form className="flex flex-col gap-2">
            <input type="text" placeholder="Código de descuento" />
            <button type="submit">Aplicar</button>
        </form> 
  )
}
