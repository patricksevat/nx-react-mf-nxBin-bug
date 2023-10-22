import { ExecutorContext, runExecutor } from '@nx/devkit';
import { WrappedServeExecutorSchema } from './schema';

export default async function* wrappedServe(
  options: WrappedServeExecutorSchema,
  context: ExecutorContext
) {
  return yield* await runExecutor(
    {
      project: context.projectName!,
      target: 'serve',
      configuration: context.configurationName,
    },
    options,
    context
  );
}
