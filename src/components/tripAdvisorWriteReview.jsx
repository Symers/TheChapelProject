import React, { useEffect, useRef } from "react";

export default function TripAdvisorWidgetIframe() {
  const iframeRef = useRef(null);
  const injectedRef = useRef(false);

  useEffect(() => {
    if (injectedRef.current) return;
    injectedRef.current = true;

    const iframe = iframeRef.current;
    if (!iframe) return;

    const uniq = 965;

    const html = `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { margin: 0; padding: 0; font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial; }
      /* stops the fallback logo being enormous if the widget takes a moment */
      img { max-width: 220px; height: auto; display: block; }
    </style>
  </head>
  <body>
    <div id="TA_cdswritereviewlg${uniq}" class="TA_cdswritereviewlg">
      <ul class="TA_links">
        <li>
          <a target="_blank" rel="noreferrer"
            href="https://www.tripadvisor.co.uk/Attraction_Review-g186487-d211671-Reviews-King_s_College_Chapel-Aberdeen_Aberdeenshire_Scotland.html">
            <img src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg" alt="TripAdvisor" />
          </a>
        </li>
      </ul>
    </div>

    <script async src="https://www.jscache.com/wejs?wtype=cdswritereviewlg&uniq=${uniq}&locationId=211671&lang=en_UK&display_version=2"></script>
  </body>
</html>`;

    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!doc) return;

    doc.open();
    doc.write(html);
    doc.close();
  }, []);

  return (
    <iframe
      ref={iframeRef}
      title="Tripadvisor Write Review"
      style={{ border: 0, width: "100%", maxWidth: 420, height: 220 }}
      sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
    />
  );
}