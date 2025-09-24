
import Parent from "@/Component/Parent";
export default function MyApp({ Component, pageProps }) {
  return (
    <Parent>
      <Component {...pageProps} />
    </Parent>
  )
}