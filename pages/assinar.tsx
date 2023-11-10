import { Page, Card, Layout, Button } from '@shopify/polaris';
import Webcam from "react-webcam";
import SignatureCanvas from 'react-signature-canvas';
import { useState, useRef } from 'react';

const DocumentPage = () => {
  const webcamRef = useRef(null);
  const signatureRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [signature, setSignature] = useState(null);

  const capturePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  };

  const saveSignature = () => {
    setSignature(signatureRef.current.toDataURL());
  };

  return (
    <Page title="Documentos e Assinatura">
      <Layout>
        <Layout.Section>
          <Card title="Capture a Foto com a CNH" sectioned>
            <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
            <Button onClick={capturePhoto}>Capturar Foto</Button>
            {imgSrc && <img src={imgSrc} alt="Pré-visualização da CNH" />}
          </Card>
        </Layout.Section>
        <Layout.Section>
          <Card title="Assinatura Digital" sectioned>
            <SignatureCanvas ref={signatureRef} penColor='black' />
            <Button onClick={saveSignature}>Salvar Assinatura</Button>
            {signature && <img src={signature} alt="Pré-visualização da Assinatura" />}
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default DocumentPage;
