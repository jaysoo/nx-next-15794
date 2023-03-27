import { Ui } from '@nextorg2/ui';
import { api } from '@nextorg2/api';
export function Index() {
  return (
    <>
      <p>{api()}</p>
      < Ui />
    </>
  );
}

export default Index;
