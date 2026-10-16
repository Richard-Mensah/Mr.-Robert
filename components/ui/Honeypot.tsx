/** Hidden field that real visitors never fill in; the API rejects submissions that do. */
export default function Honeypot() {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label htmlFor="field-website">Leave this field empty</label>
      <input id="field-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
    </div>
  )
}
