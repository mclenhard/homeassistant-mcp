//evals.ts

import { EvalConfig } from 'mcp-evals';
import { openai } from "@ai-sdk/openai";
import { grade, EvalFunction } from "mcp-evals";

const test_toolEval: EvalFunction = {
    name: 'test_tool Evaluation',
    description: 'Evaluates the functionality of the test_tool',
    run: async () => {
        const result = await grade(openai("gpt-4"), "How do I use the test_tool to validate a device and execute an operation on it?");
        return JSON.parse(result);
    }
};

const test_tool_2Eval: EvalFunction = {
    name: 'test_tool_2',
    description: 'Evaluates currency conversion functionality for test_tool_2',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please convert 200 USD to EUR.");
        return JSON.parse(result);
    }
};

const simple_toolEval: EvalFunction = {
    name: 'simple_tool Evaluation',
    description: 'Evaluates the simple_tool functionality',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please verify that the simple_tool executes and returns a success result.");
        return JSON.parse(result);
    }
};

const uncachedToolEval: EvalFunction = {
    name: 'uncachedTool Evaluation',
    description: 'Evaluates the uncached tool functionality',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Does this tool cache results or compute them every time?");
        return JSON.parse(result);
    }
};

const system_toolEval: EvalFunction = {
    name: 'system_tool evaluation',
    description: 'Evaluates the system tool functionality',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please provide the current system status including CPU usage and memory details");
        return JSON.parse(result);
    }
};

const config: EvalConfig = {
    model: openai("gpt-4"),
    evals: [test_toolEval, test_tool_2Eval, simple_toolEval, uncachedToolEval, system_toolEval]
};
  
export default config;
  
export const evals = [test_toolEval, test_tool_2Eval, simple_toolEval, uncachedToolEval, system_toolEval];