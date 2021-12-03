import { render } from '@testing-library/react';
import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

test('both Editor and Preview to pop up', () => {
  const container = render(
    <>
      <Preview />
      <Editor />
    </>
  );
  expect(container).toMatchSnapshot();
});
