import { WrappedServeExecutorSchema } from './schema';
import executor from './executor';

const options: WrappedServeExecutorSchema = {};

describe('WrappedServe Executor', () => {
  it('can run', async () => {
    const output = await executor(options);
    expect(output.success).toBe(true);
  });
});
