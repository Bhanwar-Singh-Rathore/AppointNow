import { ColorRing } from "react-loader-spinner"

function Spinner() {
    return (
        <div className="flex justify-center align-middle mt-80" >
             <ColorRing
  visible={true}
  justifyContent="center"
  margin="4.8rem auto"

  width= "6.4rem"
  aspect-ratio= "1"
  border-radius= "50%"
  background="radial-gradient(farthest-side, var(--color-brand-600) 94%, #0000)
      top/10px 10px no-repeat"
  
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={[]}
/>
        </div>
    )
}

export default Spinner
